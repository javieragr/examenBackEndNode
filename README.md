# examenBackEndNode

este es un servicio en node con una coneccion a la bd de mongo 

el servidor hacepta 2 peticiones /stats[GET] y /mutation {}[POST]
para verificar adn y guardar podemos mandar las peticiones con 

http://localhost:4000/api/validators/mutation
{

"dna":["ATGA","TTAG","TACC","ACAG"]

}
// ESTA PETICION CONTIENE UNA MUTACION EN DIAGONAL


{

"dna":["ATCG","TTTT","CGCG","GAGG"]

}
// ESTA PETICION CONTIENE UNA MUTACION EN HORIZONTAL

{

"dna":["GGCT","TGAA","TGAG","AGTC",]

}
// ESTA PETICION CONTIENE UNA MUTACION EN VERTICAL

{

"dna":["CTAG","CAGT","TAGA","TGAT",]

}
//ESTA PETICION NO CONTIENE UNA MUTACION



CON ESTA PETICION PODREMOS ACCEDER A LOS STATS DE LOS ADNS [GET]
http://localhost:4000/api/validators/stats

