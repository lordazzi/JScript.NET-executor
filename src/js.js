import System;
import System.IO;
import System.Environment;

var args	= System.Environment.GetCommandLineArgs();
args		= args.join(' ');
args		= args.replace(/^.+[ ]/, '');

if (args.match(/.+(\.js)$/) && File.Exists(args)) {
	args = File.ReadAllText(args);
}

eval(args);
