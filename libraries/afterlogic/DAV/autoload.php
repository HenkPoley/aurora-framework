<?php

/* -AFTERLOGIC LICENSE HEADER- */

function DAVLibrariesAutoload($className)
{
	if (0 === strpos($className, 'afterlogic') && false !== strpos($className, '\\'))
	{
		include CApi::LibrariesPath().'afterlogic/'.str_replace('\\', '/',substr($className, 11)).'.php';
	}
	else if (0 === strpos($className, 'Sabre') && false !== strpos($className, '\\'))
	{
		include CApi::LibrariesPath().'Sabre/'.str_replace('\\', '/',substr($className, 6)).'.php';
	}
}

spl_autoload_register('DAVLibrariesAutoload');
