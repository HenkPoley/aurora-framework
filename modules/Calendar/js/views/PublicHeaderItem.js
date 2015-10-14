'use strict';

var
	TextUtils = require('core/js/utils/Text.js'),
	CHeaderItemView = require('core/js/views/CHeaderItemView.js'),
	PublicHeaderItem = new CHeaderItemView(TextUtils.i18n('HEADER/CALENDAR'), TextUtils.i18n('TITLE/CALENDAR'))
;

module.exports = PublicHeaderItem;