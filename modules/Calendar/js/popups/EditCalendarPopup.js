'use strict';

var
	_ = require('underscore'),
	$ = require('jquery'),
	ko = require('knockout'),
	
	TextUtils = require('core/js/utils/Text.js'),
	Types = require('core/js/utils/Types.js'),
	
	Popups = require('core/js/Popups.js'),
	CAbstractPopup = require('core/js/popups/CAbstractPopup.js'),
	AlertPopup = require('core/js/popups/AlertPopup.js')
;

/**
 * @constructor
 */
function CEditCalendarPopup()
{
	CAbstractPopup.call(this);
	
	this.fCallback = null;
	
	this.calendarId = ko.observable(null);
	this.calendarName = ko.observable('');
	this.calendarDescription = ko.observable('');
	
	this.calendarNameFocus = ko.observable(false);
	this.calendarDescriptionFocus = ko.observable(false);
	
	this.colors = ko.observableArray([]);
	this.selectedColor = ko.observable(this.colors()[0]);
	
	this.popupTitle = ko.observable('');
}

_.extendOwn(CEditCalendarPopup.prototype, CAbstractPopup.prototype);

CEditCalendarPopup.prototype.PopupTemplate = 'Calendar_EditCalendarPopup';

/**
 * @param {Function} fCallback
 * @param {Array} aColors
 * @param {Object} oCalendar
 */
CEditCalendarPopup.prototype.onShow = function (fCallback, aColors, oCalendar)
{
	this.fCallback = fCallback;
	
	if (Types.isNonEmptyArray(aColors))
	{
		this.colors(aColors);
		this.selectedColor(aColors[0]);		
	}
	
	if (oCalendar)
	{
		this.popupTitle(oCalendar.name() ? TextUtils.i18n("CALENDAR/HEADING_EDIT_CALENDAR") : TextUtils.i18n("CALENDAR/HEADING_CREATE_CALENDAR"));
		this.calendarName(oCalendar.name ? oCalendar.name() : '');
		this.calendarDescription(oCalendar.description ? oCalendar.description() : '');
		this.selectedColor(oCalendar.color ? oCalendar.color() : '');
		this.calendarId(oCalendar.id ? oCalendar.id : null);
	}
	else
	{
		this.popupTitle(TextUtils.i18n("CALENDAR/HEADING_CREATE_CALENDAR"));
	}
};

CEditCalendarPopup.prototype.onHide = function ()
{
	this.calendarName('');
	this.calendarDescription('');
	this.selectedColor(this.colors[0]);
	this.calendarId(null);
};

CEditCalendarPopup.prototype.save = function ()
{
	if (this.calendarName() === '')
	{
		Popups.showPopup(AlertPopup, [TextUtils.i18n('CALENDAR/WARNING_BLANK_CALENDAR_NAME')]);
	}
	else
	{
		if ($.isFunction(this.fCallback))
		{
			this.fCallback(this.calendarName(), this.calendarDescription(), this.selectedColor(), this.calendarId());
		}
		this.closePopup();
	}
};

module.exports = new CEditCalendarPopup();
