// عداد الزوار
function updateVisitorCounter() {
    // الزوار اليوم (سيتم حفظه في localStorage)
    let today = new Date().toDateString();
    let dailyVisits = JSON.parse(localStorage.getItem('dailyVisits')) || {};
    
    if (!dailyVisits.date || dailyVisits.date !== today) {
        dailyVisits = { date: today, count: 0 };
    }
    
    dailyVisits.count++;
    localStorage.setItem('dailyVisits', JSON.stringify(dailyVisits));
    
    // إجمالي الزوار (سيتم حفظه في localStorage)
    let totalVisits = parseInt(localStorage.getItem('totalVisits')) || 0;
    totalVisits++;
    localStorage.setItem('totalVisits', totalVisits);
    
    // عرض الأرقام
    document.getElementById('daily-visitors').textContent = dailyVisits.count;
    document.getElementById('total-visitors').textContent = totalVisits;
}

// تحديث العداد عند تحميل الصفحة
window.addEventListener('load', function() {
    updateVisitorCounter();
    
    // تحميل آخر إحصائيات الزوار
    let dailyVisits = JSON.parse(localStorage.getItem('dailyVisits')) || { count: 0 };
    let totalVisits = localStorage.getItem('totalVisits') || 0;
    
    document.getElementById('daily-visitors').textContent = dailyVisits.count;
    document.getElementById('total-visitors').textContent = totalVisits;
});// Visitor tracking script
