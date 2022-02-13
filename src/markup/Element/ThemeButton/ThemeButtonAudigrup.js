import React,{Component} from 'react';			
import { Link } from 'react-router-dom';
import cotizar from './../../../images/logoclientes/cotizar.JPG';
export default class ThemeButton extends Component{
	render(){
		return(
			<>
			  <a className="bt-buy-now theme-btn"><img src={cotizar} alt="" /></a>
			

                                                   
												
			
			</>
		)
	}	
}
