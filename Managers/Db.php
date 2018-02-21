<?php
/*
 * @copyright Copyright (c) 2017, Afterlogic Corp.
 * @license AGPL-3.0 or Afterlogic Software License
 *
 * This code is licensed under AGPLv3 license or Afterlogic Software License
 * if commercial version of the product was purchased.
 * For full statements of the licenses see LICENSE-AFTERLOGIC and LICENSE-AGPL3 files.
 */

namespace Aurora\System\Managers;

/**
 * \Aurora\System\Managers\Db class summary
 *
 * @package Db
 */
class Db extends \Aurora\System\Managers\AbstractManagerWithStorage
{
	private static $_instance = null;

	public static function createInstance()
	{
		return new self();
	}
	
	public static function getInstance()
	{
		if(is_null(self::$_instance))
		{
			self::$_instance = new self();		
		}
		
		return self::$_instance;
	}	
	
	/**
	 * 
	 * @param string $sForcedStorage
	 */
	public function __construct()
	{
		parent::__construct(\Aurora\System\Api::GetModule('Core'), new Db\Storage($this));
	}	
	
	public function executeSqlFile($sFilePath)
	{
		return $this->oStorage->executeSqlFile($sFilePath);
	}
}
