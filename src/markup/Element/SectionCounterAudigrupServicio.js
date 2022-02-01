import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';

import bg1 from './../../images/our-work/advisor.jpg';

const iconBlog =[
	{icon: <i className="flaticon-workers" />,	   title: 'Auditoria Interna', Designación:"Realizada en forma voluntaria por la administración o por cumplir el calendario interno de la compañía.", objetivos:'Satisfacer las necesidades de la administración como ejercer una función de control o realizar una función de asesoramiento.'
     ,funciones:'Evaluación del sistema de control interno y detección de riesgos.', profesional:'Personal interno de la organización con conocimientos del tema.'
	 , dependencia:'Al ser ejecutada por un empleado de la compañía está limitado e imposibilitado de dar fe pública.'
	, naturaleza:'Dividida en relación con áreas operativas y responsabilidad administrativa.'
	,periodicidad:'Las actividades de auditoría interna se realizan de forma permanente de acuerdo al cronograma interno.'
	},
	{icon: <i className="flaticon-team" />, title: 'Auditoria Externa',Designación:"Realizada en forma voluntaria por los altos mandos de la compañía.",objetivos:'Satisfacer la necesidad de usuarios externos respecto a la información financiera, como por ejemplo una entidad crediticia.'
    , funciones:'Análisis de la confiabilidad de los estados financieros.', profesional:'Contratación de personal independiente o externo.'
    ,dependencia:'Independencia absoluta, por lo que el auditor está directamente relacionado con la detección del fraude.'
    , naturaleza:'Dividida en relación con las cuentas de balance y estado de resultados.'
    ,periodicidad:'Generalmente cada año o cada 6 meses.'
    },
	];

class SectionCounter extends Component{
	render(){
		return(
			<Fragment>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container">
						<div className="section-head text-white text-center">
							<h2 className="box-title m-tb0 max-w800 m-auto">Auditoría Interna y Externa<span className="bg-primary"></span></h2>
							<p>Las técnicas utilizadas en ambos casos son las mismas. Ambos centran su atención en temas de control interno y en la evaluación de riesgos para generar informes que contienen información bastante similar como la formulación de sugerencias para mejorar las no conformidades, la eficiencia de control interno y sistemas de contabilidad, opiniones sobre el control de personal, etc.</p>
						</div>
						<div className="container">
						<div className="row text-white">
							{iconBlog.map((item, index)=> (
								<div className="col-lg-6 col-md-4 col-sm-6 m-b30" key={index}>
									<div className="icon-bx-wraper bx-style-1 center">
										<div className="icon-lg text-white m-b20 "> <span className="icon-cell icon-lg ">{item.icon}</span> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
											<h10 className="dlab-tilte text-uppercase">Designación</h10>
											<p>{item.Designación}</p>
											<h10 className="dlab-tilte text-uppercase">Objetivos</h10>
											<p>{item.objetivos}</p>
											<h10 className="dlab-tilte text-uppercase">Funciones</h10>
											<p>{item.funciones}</p>
											<h10 className="dlab-tilte text-uppercase">Ejecutor</h10>
											<p>{item.profesional}</p>
											<h10 className="dlab-tilte text-uppercase">Dependencia</h10>
											<p>{item.dependencia}</p>
											<h10 className="dlab-tilte text-uppercase">Naturaleza del informe</h10>
											<p>{item.naturaleza}</p>
											<h10 className="dlab-tilte text-uppercase">Periodicidad</h10>
											<p>{item.periodicidad}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					
					</div>
					
				</div>	
			</Fragment>
		)
	}
}
export default SectionCounter;