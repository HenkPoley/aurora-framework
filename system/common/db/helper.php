<?php

/* -AFTERLOGIC LICENSE HEADER- */

/**
 * @package Api
 * @subpackage Db
 */
interface IDbHelper
{
	/**
	 * @param string $sValue
	 * @param bool $bWithOutQuote = false
	 * @param bool $bSearch = false
	 * @return string
	 */
	public function EscapeString($sValue, $bWithOutQuote = false, $bSearch = false);

	/**
	 * @param string $sValue
	 * @return string
	 */
	public function EscapeColumn($sValue);

	/**
	 * @param int $iTimeStamp
	 * @param bool $bAsInsert = false
	 * @return string
	 */
	public function TimeStampToDateFormat($iTimeStamp, $bAsInsert = false);

	/**
	 * @param string $sFieldName
	 * @return string
	 */
	public function GetDateFormat($sFieldName);

	/**
	 * @param string $sFieldName
	 * @return string
	 */
	public function UpdateDateFormat($sFieldName);
}