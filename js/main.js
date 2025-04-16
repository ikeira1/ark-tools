// تبديل بين الأدوات
function showTool(toolId) {
    document.querySelectorAll('.tool').forEach(tool => {
        tool.classList.remove('active');
    });
    document.getElementById(toolId).classList.add('active');
    
    // تحديث التبويبات النشطة
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// نظام الوضع الليلي
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ark-tools-theme', theme);
}

// تحميل الوضع المحفوظ
const savedTheme = localStorage.getItem('ark-tools-theme') || 'light';
setTheme(savedTheme);

// تهيئة الصفحة
document.addEventListener("DOMContentLoaded", function() {
    // إضافة مستمع حدث للنمط المخصص في أداة الإنقرامز
    if(document.getElementById("engramPattern")) {
        document.getElementById("engramPattern").dispatchEvent(new Event('change'));
    }
    
    // تهيئة أخرى عند الحاجة
});// Main JavaScript functionality
