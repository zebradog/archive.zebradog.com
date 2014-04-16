function newwin()
	{
		var newWindow = window.open('http://www.journalinteractive.com/utilities/emailstory.asp?url=' + escape(window.location.href),'send','toolbar=0,menubar=0,scrolling=no,scrollbars=yes,resizable=yes,width=280,height=530');
	
		if (newWindow.opener == null) {
			newWindow.opener = self;
		}
	}
