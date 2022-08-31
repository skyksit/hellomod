Events.on(ClientLoadEvent, (event) => {
  var text = Vars.state.getSector();
  Vars.ui.hudfrag.showToast(text);

  const myDialog = new BaseDialog("Dialog Title");
  // Add "go back" button
  myDialog.addCloseButton();
  // Add text to the main content
  myDialog.cont.add("Goodbye.");
  // Show dialog
  myDialog.show();
});
