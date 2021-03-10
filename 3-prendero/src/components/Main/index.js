import React, {Component} from 'react'
import Remera from './images/Remera.jpg';
import Article from './Article';
import Category from './Article/Category';
import Card from './Article/Card';
import Table from './Article/Table';

const  Main = () =>  {
    return ( 
        <main>
       <div className="lineaarriba">
     
       <Card />  
    
                      
							
						</div>

                        <div class="centro">
					
						
                        <Article 
                        titulo="Ultimo producto en base de datos"
                        >
                                    <div class="imagen">
										<img src={Remera} alt="image" />
									</div>
									<div class= "nombre">
                                        <p>Remera blanca</p>
                                    </div>
                                    <div class= "precio">
                                     <p>$800</p>
                                     </div>
                                     <div class= "descripcion">
                                     <p>Remera blanca lisa para hombre ultima moda</p>
                                     </div>
                            </Article>
                        <Article 
                        titulo="Categorias en base de datos"
                        >
                              <Category />  
                              <Category />  
                              <Category />  
                              <Category />  
                              <Category />  
                            
                        </Article>
                       
                        </div>

                        <div class="lineaabajo">

                        <h1 class="h3 mb-2 text-gray-800">Todos los productos en la base de datos</h1>

                        <div class="contenedortabla">
						<div class="body">
							<div class="tabla">
								<table class="table" width="100%"  cellspacing="0">
                                    
									<thead >
										<tr>
											<th>Nombre</th>
											<th>Descripcion</th>
											<th>Precio</th>
											<th>Categoria</th>
											<th>Talle</th>
											<th>Sexo</th>
										</tr>
									</thead>
                                  
                                   
                                    <Table 
                                    Nombre="Remera lisa hombre"
                                    Descripcion="Remera blanca lisa para hombre ultima moda" 
                                    Precio= "$800"
                                    Categoria= "buzo"
                                    Talle= "XL"
                                    Sexo= "Hombre"

                                    /> 
                                      <Table 
                                    Nombre="Remera lisa hombre"
                                    Descripcion="Remera blanca lisa para hombre ultima moda" 
                                    Precio= "$800"
                                    Categoria= "buzo"
                                    Talle= "XL"
                                    Sexo= "Hombre"

                                    /> 
                                      <Table 
                                    Nombre="Remera lisa hombre"
                                    Descripcion="Remera blanca lisa para hombre ultima moda" 
                                    Precio= "$800"
                                    Categoria= "buzo"
                                    Talle= "XL"
                                    Sexo= "Hombre"

                                    /> 
                                      <Table 
                                    Nombre="Remera lisa hombre"
                                    Descripcion="Remera blanca lisa para hombre ultima moda" 
                                    Precio= "$800"
                                    Categoria= "buzo"
                                    Talle= "XL"
                                    Sexo= "Hombre"

                                    /> 
                                      <Table 
                                    Nombre="Remera lisa hombre"
                                    Descripcion="Remera blanca lisa para hombre ultima moda" 
                                    Precio= "$800"
                                    Categoria= "buzo"
                                    Talle= "XL"
                                    Sexo= "Hombre"

                                    /> 

                                 
 
                                   
									
								</table>
							</div>
						</div>
					</div>
				</div>
       
        </main>
 )
}
    
export default Main;