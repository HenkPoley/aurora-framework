'use strict';

var
	TextUtils = require('modules/Core/js/utils/Text.js'),
			
	CHeaderItemView = require('modules/Core/js/views/CHeaderItemView.js')
;

module.exports = new CHeaderItemView(TextUtils.i18n('CALENDAR/ACTION_SHOW_CALENDAR'));
