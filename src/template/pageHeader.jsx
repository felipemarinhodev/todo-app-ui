import React from 'react';

// import { Container } from './styles';

export default props => (
	<header className="page-header">
		<h2>{props.name} <small>{props.small}</small></h2>
	</header>
)
