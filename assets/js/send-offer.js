// Send Offer page JS (extracted)

(function () {
    // Mobile menu toggle
    window.toggleMobileMenu = function () {
        var el = document.getElementById('mobile-menu-sidebar');
        if (!el) return;
        el.classList.toggle('hidden');
        el.classList.toggle('flex');
    };

    // Submit behavior: show success + toast
    var form = document.getElementById('send-offer-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var card = form.closest('section');
            if (card) card.classList.add('hidden');
            var success = document.getElementById('send-success');
            if (success) success.classList.remove('hidden');
            var toast = document.getElementById('toast');
            if (toast) {
                toast.classList.remove('hidden');
                setTimeout(function () { toast.classList.add('hidden'); }, 2500);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Services select -> removable tags
    (function () {
        var select = document.getElementById('services-select');
        var container = document.getElementById('selected-services');
        if (!select || !container) return;
        var labels = {
            insurance: 'تأمين ضد الفقد والكسر',
            cleaning: 'تنظيف بعد النقل',
            assembly: 'تفكيك وتركيب',
            intercity: 'نقل بين مدن',
        };
        var selected = new Set();
        function render() {
            container.innerHTML = '';
            selected.forEach(function (key) {
                var tag = document.createElement('span');
                tag.className = 'px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] inline-flex items-center gap-2';
                var close = document.createElement('button');
                close.type = 'button';
                close.className = 'text-[#00B8A9]';
                close.innerHTML = '<i class="fas fa-times"></i>';
                close.addEventListener('click', function () { selected.delete(key); render(); });
                var text = document.createElement('span');
                text.textContent = labels[key] || key;
                tag.appendChild(close);
                tag.appendChild(text);
                container.appendChild(tag);
            });
        }
        select.addEventListener('change', function () {
            var val = select.value;
            if (val) { selected.add(val); render(); select.value = ''; }
        });
    })();

    // Open native pickers when clicking wrapper or row
    (function () {
        document.querySelectorAll('[data-picker]').forEach(function (wrap) {
            var input = wrap.querySelector('input[type="date"], input[type="time"]');
            if (!input) return;
            wrap.addEventListener('click', function (e) {
                if (e.target === input) return;
                try {
                    if (typeof input.showPicker === 'function') { input.showPicker(); }
                    else { input.focus(); setTimeout(function () { try { input.click(); } catch (e) { } }, 0); }
                } catch (err) { input.focus(); }
            });
        });
        document.querySelectorAll('[data-picker-row]').forEach(function (row) {
            row.addEventListener('click', function () {
                var input = row.querySelector('input[type="date"], input[type="time"]');
                if (!input) return;
                try {
                    if (typeof input.showPicker === 'function') { input.showPicker(); }
                    else { input.focus(); setTimeout(function () { try { input.click(); } catch (e) { } }, 0); }
                } catch (e) { input.focus(); }
            });
        });
        // Format date display as dd.mm.yyyy
        var dateInput = document.getElementById('offer-date-input') || document.getElementById('offer-date') || document.querySelector('input[type="date"]');
        var dateDisplay = document.getElementById('offer-date-display');
        function fmtDate(val) {
            if (!val) return '';
            var parts = val.split('-');
            if (parts.length !== 3) return val;
            return parts[2] + '.' + parts[1] + '.' + parts[0];
        }
        if (dateInput && dateDisplay) {
            dateDisplay.textContent = fmtDate(dateInput.value);
            dateInput.addEventListener('change', function () { dateDisplay.textContent = fmtDate(dateInput.value); });
        }
    })();
})();


