(function () {
  function setActive(btn, groupEl) {
    groupEl.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('bg-[#D2F2F0]', 'text-[#00B8A9]', 'text-[#DC4632]', 'border', 'border-[#00B8A9]');
      b.classList.add('text-[#6B7280]');
    });
    btn.classList.remove('text-[#6B7280]');
    btn.classList.add('bg-[#D2F2F0]', 'text-[#00B8A9]', 'border', 'border-[#00B8A9]');
  }

  function filterList(groupName, filter) {
    if (groupName === 'orders') {
      var list = document.getElementById('orders-list');
      if (!list) return;
      list.querySelectorAll('[data-status]').forEach(function (row) {
        var st = row.getAttribute('data-status');
        row.classList.toggle('hidden', filter !== 'all' && st !== filter);
      });
    }
    if (groupName === 'quotes') {
      var ql = document.getElementById('quotes-list');
      if (!ql) return;
      ql.querySelectorAll('[data-state]').forEach(function (card) {
        var st = card.getAttribute('data-state');
        card.classList.toggle('hidden', filter !== 'all' && st !== filter);
      });
    }
  }

  document.querySelectorAll('[data-tabs-group]').forEach(function (groupEl) {
    var groupName = groupEl.getAttribute('data-tabs-group');
    groupEl.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        setActive(btn, groupEl);
        filterList(groupName, filter);
      });
    });
  });
})();


