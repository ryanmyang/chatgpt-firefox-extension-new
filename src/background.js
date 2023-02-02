console.log("background.js loaded")

// Create a context menu item
browser.contextMenus.create({
  id: "ask-chatgpt",
  title: "Ask ChatGPT",
  contexts: ["all"],
});

// Listen for when the user clicks on the context menu item
browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log("contextMenu oncliked");
  if (info.menuItemId === "ask-chatgpt") {
    // Send a message to the content script
    browser.tabs.sendMessage(tab.id, { type: "ASK_CHATGPT" });
  }
});
