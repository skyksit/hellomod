Events.on(WorldLoadEvent, event => {
  var text = Vars.state.getSector()
  Vars.ui.hudfrag.showToast(text)
}