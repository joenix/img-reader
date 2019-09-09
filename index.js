module.exports = (

	url = '',

	sync = () => {},

	read = ( link, executer, img ) => {

		img = new Image();

		img.src = link;

		img.complete ? executer( img ) : ( item.onload = () => {

			executer( img ), item.onload = null;

		});

	}

) => {

	if ( sync === true )
	{
		new Promise(

			(resolve, reject) => {

				read( url, resolve );

			}

		);
	}

}
