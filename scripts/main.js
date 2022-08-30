const myDialog = new BaseDialog("Dialog Title");

myDialog.addCloseButton();

myDialog.cont.add(Vars.state.getSector());

myDialog.show();

// Events.fire(new SectorInvasionEvent(sector))
