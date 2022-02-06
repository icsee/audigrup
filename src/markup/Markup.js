import React, {Component} from 'react';
import {  Route, Switch, withRouter, Redirect } from 'react-router-dom';

import ThemeButton from './Element/ThemeButton/ThemeButton';

import Homepage from './Pages/Homepage1';
import Index2 from './Pages/Index2';
import IndexAudigrup from './Pages/IndexAudigrup';
import Index4 from './Pages/Index4';
import Index5 from './Pages/Index5';
import Index6 from './Pages/Index6';
import Index7 from './Pages/Index7';
import Aboutus1 from './Pages/Aboutus/AboutusAudigrup';
import Aboutus2 from './Pages/Aboutus/Aboutus2';
import Error403 from './Pages/Error/Error403';
import Error404 from './Pages/Error/Error404';
import Error405 from './Pages/Error/Error405';
import ComingSoon1 from './Pages/ComingSoon/ComingSoon1';
import UnderMaintenance from './Pages/UnderMaintenance';
import Expertise from './Pages/Expertise';
import ProjectManagement from './Pages/ProjectManagement';
import OurProjects from './Pages/OurProjects';
import ProjectDetails from './Pages/ProjectDetails';
import Team from './Pages/Team';
import Faqs from './Pages/Faqs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/ContactAudigrup';
import Service from './Pages/Service/Service';
import ServicesDetails from './Pages/Service/ServicesAudigrup';
import BlogStandard from './Pages/BlogStandard/BlogStandard';
import BlogStandardLeftSidebar from './Pages/BlogStandard/BlogStandardLeftSidebar';
import BlogStandardRightSidebar from './Pages/BlogStandard/BlogStandardRightSidebar';
import BlogClassicGrid from './Pages/BlogClassic/BlogClassicGrid';
import BlogClassicLeftSidebar from './Pages/BlogClassic/BlogClassicLeftSidebar';
import BlogClassicRightSidebar from './Pages/BlogClassic/BlogClassicRightSidebar';
import BlogListLeftSidebar from './Pages/BlogList/BlogListLeftSidebar';
import BlogListRightSidebar from './Pages/BlogList/BlogListRightSidebar';
import BlogDetails from './Pages/BlogDetail/BlogDetails';
import ProtfolioFullWidth from './Pages/Protfolio/ProtfolioFullWidth';
import PortfolioGrid2 from './Pages/Protfolio/PortfolioGrid2';
import PortfolioGrid3 from './Pages/Protfolio/PortfolioGrid3';
import PortfolioGrid4 from './Pages/Protfolio/PortfolioGrid4';
import ShopColumns from './Pages/Shop/ShopColumns';
import ShopColumnsSidebar from './Pages/Shop/ShopColumnsSidebar';

import ShopCart from './Pages/Shop/ShopCart';
import ShopCheckout from './Pages/Shop/ShopCheckout';	
import ShopProductDetails from './Pages/Shop/ShopProductDetails';	

import ShopWishlist from './Pages/Shop/ShopWishlist';
import ShopLogin from './Pages/Shop/ShopLogin';
import ShopRegister from './Pages/Shop/ShopRegister';

import ShortIconBox from './Pages/ShortCode/ShortIconBox';
import ShortCounter from './Pages/ShortCode/ShortCounter';
import ShortPortfolio from './Pages/ShortCode/ShortPortfolio';
import ShortTabs from './Pages/ShortCode/ShortTabs';
import ShortTeam from './Pages/ShortCode/ShortTeam';
import ShortTestimonial from './Pages/ShortCode/ShortTestimonial';
import ShortForm from './Pages/ShortCode/ShortForm';
import ShortAccordions from './Pages/ShortCode/ShortAccordions';

import ScrollToTop from './Element/ScrollToTop';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postFeedback,fetchToken } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    token: state.token
    
    
  }
}





const mapDispatchToProps = dispatch => ({
  
   
    postFeedback: (firstname, telnum, email, message, token)  => dispatch(postFeedback(firstname,  telnum,  email, message, token)),
   
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchToken: () => { dispatch(fetchToken())},
  
  });
  



import RealSector from './Pages/Agendas/RealSector';
import SolidaritySector from './Pages/Agendas/SolidaritySector';


class Markup extends Component{
    
  constructor(props) {
    super(props);
   
  }



  componentDidMount() {
    this.props.fetchToken();
      }


	render(){
		return(
			
                <div className="page-wraper">
                <TransitionGroup>
                
                    <Switch>
                        <Route path='/' exact component={IndexAudigrup} />
                        <Route path='/index-3' exact component={IndexAudigrup} />
                        <Route path='/about-1' exact component={Aboutus1} />
                        <Route path='/about-2' exact component={Aboutus2} />
                        <Route path='/error-403' exact component={Error403} />
                        <Route path='/error-404' exact component={Error404} />
                        <Route path='/error-405' exact component={Error405} />
                        <Route path='/coming-soon-1' exact component={ComingSoon1} />
                        <Route path='/under-maintenance' exact component={UnderMaintenance} />
                        <Route path='/expertise' exact component={Expertise} />
                        <Route path='/project-management' exact component={ProjectManagement} />
                        <Route path='/our-projects' exact component={OurProjects} />
                        <Route path='/project-details' exact component={ProjectDetails} />
                        <Route path='/team' exact component={Team} />
                        <Route path='/faqs' exact component={Faqs} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                                                                                 postFeedback={this.props.postFeedback} token={this.props.token}/>} />

                        <Route path='/service' exact component={Service} />
                        <Route path='/services-details' exact component={ServicesDetails} />
                        <Route path='/real-sectors' exact component={RealSector}/>
                        <Route path='/solidarity-sectors' exact component={SolidaritySector}/>
                        <Route path='/blog-standard' exact component={BlogStandard} />
                        <Route path='/blog-standard-left-sidebar' exact component={BlogStandardLeftSidebar} />
                        <Route path='/blog-standard-right-sidebar' exact component={BlogStandardRightSidebar} />
                        <Route path='/blog-classic-grid' exact component={BlogClassicGrid} />
                        <Route path='/blog-classic-left-sidebar' exact component={BlogClassicLeftSidebar} />
                        <Route path='/blog-classic-right-sidebar' exact component={BlogClassicRightSidebar} />
                        <Route path='/blog-list-left-sidebar' exact component={BlogListLeftSidebar} />
                        <Route path='/blog-list-right-sidebar' exact component={BlogListRightSidebar} />
                        <Route path='/blog-details' exact component={BlogDetails} />
                        <Route path='/portfolio-full-width' exact component={ProtfolioFullWidth} />
                        <Route path='/portfolio-grid-2' exact component={PortfolioGrid2} />
                        <Route path='/portfolio-grid-3' exact component={PortfolioGrid3} />
                        <Route path='/portfolio-grid-4' exact component={PortfolioGrid4} />
                        <Route path='/shop-columns' exact component={ShopColumns} />
                        <Route path='/shop-columns-sidebar' exact component={ShopColumnsSidebar} />
						
                        <Route path='/shop-cart' exact component={ShopCart} />
                        <Route path='/shop-checkout' exact component={ShopCheckout} />
                        <Route path='/shop-product-details' exact component={ShopProductDetails} />
                        <Route path='/shop-wishlist' exact component={ShopWishlist} />
                        <Route path='/shop-login' exact component={ShopLogin} />
                        <Route path='/shop-register' exact component={ShopRegister} />
						
                        <Route path='/short-icon-box' exact component={ShortIconBox} />
                        <Route path='/short-counter' exact component={ShortCounter} />
                        <Route path='/short-portfolio' exact component={ShortPortfolio} />
                        <Route path='/short-tabs' exact component={ShortTabs} />
                        <Route path='/short-team' exact component={ShortTeam} />
                        <Route path='/short-testimonial' exact component={ShortTestimonial} />
                        <Route path='/short-form' exact component={ShortForm} />
                        <Route path='/short-accordions' exact component={ShortAccordions} />	
                        <Redirect to="/" />					
					</Switch>
                   
                   </TransitionGroup>
                </div>
				
         
		)
	}
	
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Markup));