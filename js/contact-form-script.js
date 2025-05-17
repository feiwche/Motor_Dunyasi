// JavaScript Function 1: Update Budget Value Display
function updateBudgetValue(val) {
    document.getElementById('budgetValue').innerHTML = `<span class="range-value">₺${parseInt(val).toLocaleString('tr-TR')}</span>`;
}

// JavaScript Function 2: Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const agreement = document.getElementById('agreement').checked;
    
    if (!name || !email || !subject || !message || !agreement) {
        alert('Lütfen gerekli alanları doldurun!');
        return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin!');
        return false;
    }
    
    return true;
}

// JavaScript Function 3: Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        // Form verilerini alma
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            model: document.querySelector('input[name="model"]:checked')?.value || '',
            preferences: [
                document.getElementById('pref1').checked ? 'fiyat' : '',
                document.getElementById('pref2').checked ? 'test' : '',
                document.getElementById('pref3').checked ? 'katalog' : ''
            ].filter(Boolean),
            message: document.getElementById('message').value,
            preferredDate: document.getElementById('prefDate').value,
            preferredTime: document.getElementById('prefTime').value,
            budget: document.getElementById('budget').value
        };
        
        // Gerçek bir senaryoda burada API çağrısı yapılır
        console.log('Form gönderiliyor:', formData);
        
        // Başarılı form gönderimi sonrası modal gösterme
        $('#successModal').modal('show');
        
        // Formu sıfırlama
        document.getElementById('contactForm').reset();
    }
}

// DOM yüklendikten sonra form event listener ekleme
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
    
    // Bütçe değeri başlangıç gösterimi
    updateBudgetValue(document.getElementById('budget').value);
});