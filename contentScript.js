let sidebarVisible = true;

function findSidebar() {
  return document.querySelector(
    '.dark.hidden.bg-gray-900.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col'
  );
}

function toggleSidebar() {
  const sidebar = findSidebar();
  if (sidebar) {
    sidebar.style.display = sidebarVisible ? 'none' : 'block';
    sidebarVisible = !sidebarVisible;
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleSidebar') {
    toggleSidebar();
  }
});
