// Orders page interactions: tabs and mini-maps with OSRM routes
(function () {
  function toggleTabs(showActive) {
    const activeBtn = document.getElementById('active-tab');
    const completedBtn = document.getElementById('completed-tab');
    const active = document.getElementById('active-orders');
    const completed = document.getElementById('completed-orders');

    if (!activeBtn || !completedBtn || !active || !completed) return;

    const base = 'px-4 py-2 rounded-md flex-1';
    const activeStyle = 'bg-white border border-[#01B4AA] text-[#01B4AA]';
    const outlineStyle = 'bg-white border-none text-[#353535]';
    const neutralStyle = 'text-[#353535] border-none';

    if (showActive) {
      active.classList.remove('hidden');
      completed.classList.add('hidden');
      activeBtn.className = `${base} ${activeStyle}`;
      completedBtn.className = `${base} ${outlineStyle}`;
    } else {
      active.classList.add('hidden');
      completed.classList.remove('hidden');
      completedBtn.className = `${base} ${activeStyle}`;
      activeBtn.className = `${base} ${neutralStyle}`;
    }
  }

  function initMiniRouteMap(containerId, start, end) {
    const el = document.getElementById(containerId);
    if (!el || typeof L === 'undefined') return;

    const map = L.map(el, { zoomControl: false, attributionControl: false }).setView(start, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Try Leaflet Routing Machine for accurate roads
    if (L.Routing && L.Routing.control) {
      L.Routing.control({
        waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        show: false,
        router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }),
        lineOptions: { styles: [{ color: '#00B8A9', weight: 4, opacity: 0.9 }] },
        createMarker: () => null,
      }).addTo(map);
      return;
    }

    // Fallback to manual OSRM fetch
    const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.routes && data.routes[0]) {
          const coords = data.routes[0].geometry.coordinates.map((c) => [c[1], c[0]]);
          const line = L.polyline(coords, { color: '#00B8A9', weight: 4, opacity: 0.9 }).addTo(map);
          map.fitBounds(line.getBounds(), { padding: [10, 10] });
        } else {
          L.polyline([start, end], { color: '#00B8A9', weight: 4, opacity: 0.7 }).addTo(map);
        }
      })
      .catch(() => {
        L.polyline([start, end], { color: '#00B8A9', weight: 4, opacity: 0.7 }).addTo(map);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Tabs
    const activeBtn = document.getElementById('active-tab');
    const completedBtn = document.getElementById('completed-tab');
    if (activeBtn && completedBtn) {
      activeBtn.addEventListener('click', function () { toggleTabs(true); });
      completedBtn.addEventListener('click', function () { toggleTabs(false); });
      toggleTabs(true);
    }

    // Init maps for visible sections
    // Order 1
    initMiniRouteMap('order1-map', [24.7136, 46.6753], [24.746, 46.711]);
    // Order 2
    initMiniRouteMap('order2-map', [24.746, 46.711], [24.7136, 46.6753]);
    // Completed example
    initMiniRouteMap('order3-map', [21.4225, 39.8262], [21.6, 39.7]);
  });
})();


