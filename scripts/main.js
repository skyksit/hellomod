Events.on(ClientLoadEvent, (event) => {
  var sectors = Vars.state.getSector();
  Vars.ui.hudfrag.showToast(sectors);

  const myDialog = new BaseDialog("Dialog Title");
  // Add "go back" button
  myDialog.addCloseButton();
  // Add text to the main content
  myDialog.cont.add(sectors);
  // Show dialog
  myDialog.show();
});
