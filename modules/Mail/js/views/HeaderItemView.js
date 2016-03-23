'use strict';

var
	_ = require('underscore'),
	ko = require('knockout'),
	
	TextUtils = require('modules/Core/js/utils/Text.js'),
	
	App = require('modules/Core/js/App.js'),
	
	CAbstractHeaderItemView = require('modules/Core/js/views/CHeaderItemView.js'),
			
	AccountList = require('modules/Mail/js/AccountList.js'),
	Cache = require('modules/Mail/js/Cache.js')
;

function CHeaderItemView()
{
	CAbstractHeaderItemView.call(this, TextUtils.i18n('MAIL/ACTION_SHOW_MAIL'));
	
	this.unseenCount = Cache.newMessagesCount;
	
	this.inactiveTitle = ko.computed(function () {
		return TextUtils.i18n('MAIL/HEADING_UNREAD_MESSAGES_BROWSER_TAB_PLURAL', {'COUNT': this.unseenCount()}, null, this.unseenCount()) + ' - ' + AccountList.getEmail();
	}, this);
	
	this.accounts = AccountList.collection;
	
	this.linkText = ko.computed(function () {
		return AccountList.getEmail();
	});
}

_.extendOwn(CHeaderItemView.prototype, CAbstractHeaderItemView.prototype);

CHeaderItemView.prototype.ViewTemplate = App.isMobile() ? 'Mail_HeaderItemMobileView' : 'Mail_HeaderItemView';

var HeaderItemView = new CHeaderItemView();

HeaderItemView.allowChangeTitle(true);

module.exports = HeaderItemView;
