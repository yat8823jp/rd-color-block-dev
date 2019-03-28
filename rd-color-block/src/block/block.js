/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const RichText = wp.editor.RichText;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'rd-color-block/color-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'color-block' ), // Block title.
	description: 'Colors and their descriptions',
	icon: 'format-aside', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'color' ),
	],
	styles: [
		{
			name: 'default',
			label: __( 'ColorDescription' ),
			isDefault: true,
		},
		{
			name: 'squared',
			label: __( 'Squared' ),
		},
	],
	attributes: {
		//ブロック要素内のコンテンツをどのように表示させるか、という属性を指定する(https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-attributes/)
		content: {
			type: 'string',
			source: 'text',
			selector: 'figcaption',
		},
		align: {
			type: 'string',
		},
	},
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: function( content ) {
				  return createBlock( 'core/heading', {
				      content,
				  } );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: function( content ) {
				  return createBlock( 'core/paragraph', {
				      content,
				  } );
				},
			},
		],
	},
	supports: {
		align: true,
		alignWide: false,
		anchor: true,
		customClassName: true,
		className: "rdcolor",
		html: false,
		inserter: true,
		multiple: true,
		reusable: true,
	},
	edit() {
		return 'エディットテスト';
	},
	save() {
		return 'テスト';
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-my-block'></p>.
		return (
			<div className={ props.className }>
				<RichText
					tagName='figcaption'
					className={ props.className }
					onChange={ (content) => props.setAttributes({content}) }
					value={ props.attributes.content }
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div>
				<RichText.Content
					tagName="figcaption"
					value={ props.attributes.content }
				/>
			</div>
		);
	},
} );
