import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class Loading extends Component {

	render() {
		
		return(
			<Dimmer active inverted>
				<Loader inverted>Initializing</Loader>
			</Dimmer>
		  )

	}

}

export default Loading;