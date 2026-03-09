const tabContainer = document.getElementById('tabContainer');

tabContainer.addEventListener('click', function (e) {
    const clickedTab = e.target.closest('.tab');
    if (!clickedTab) return;

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');

    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

    const id = clickedTab.dataset.tab;
    document.getElementById(id).classList.add('active');

    if (id === 'analytics') {
        document.querySelectorAll('.bar-fill').forEach(bar => {
            const w = bar.style.getPropertyValue('--w');
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = w, 50);
        });
    }
});

document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    let start = null;
    const step = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1000, 1);
        el.textContent = prefix + Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString('en-IN');
        if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
});

document.getElementById('searchInput').addEventListener('input', function () {
    const q = this.value.toLowerCase();
    document.querySelectorAll('#userRows tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
});