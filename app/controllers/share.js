function goBack()
{
	$.share.close();
}

if(OS_ANDROID)
{
	$.backLabel.visible = false;
}

var dialog = Ti.UI.createAlertDialog({
    message: 'The file has been deleted',
    ok: 'Okay',
    title: 'File Deleted',
  });
  dialog.show();

$.share.open(); 