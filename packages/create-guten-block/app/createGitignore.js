/**
 * Install a starter .gitignore
 */

'use strict';

const path = require( 'path' );
const fs = require( 'fs-extra' );
const shell = require( 'shelljs' );

module.exports = (blockDir) => {
	shell.cd( blockDir );
	shell.touch( '.gitignore' );

	// Build a default .gitignore
	const ignore = [
		'node_modules\n',
		'## Uncomment line below if you prefer to',
		'## keep compiled files out of version control',
		'# dist/'
	].join('\n');

	return new Promise( async resolve => {
		await fs.writeFileSync(
			path.join( process.cwd(), '.gitignore' ),
			ignore + '\n'
		);
		resolve( true );
	} );
};
