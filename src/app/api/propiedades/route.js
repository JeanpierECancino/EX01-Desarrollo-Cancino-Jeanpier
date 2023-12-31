import {NextResponse} from "next/server";

import {conn} from "@/libs/mysql";

export async function GET(){

    //Obtener todos los recursos
    try {
        const results=await conn.query("SELECT * FROM propiedades");
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(
            {message:error.message},
            {status:500}
            );
    }

}

export async function POST(request){

    try {

        const {nombre,direccion,caracteristicas,estado,precioalquiler,created_at,updated_at} = await request.json();
        const result = await conn.query("INSERT INTO propiedades SET ?",{

            nombre,
            direccion,
            caracteristicas,
            estado,
            precioalquiler,
            created_at,
            updated_at

        });

        return NextResponse.json({

            nombre,
            direccion,
            caracteristicas,
            estado,
            precioalquiler,
            created_at,
            updated_at,
            id:result.insertId

        });

    } catch (error) {

        return NextResponse.json(

            {message:error.message},
            {status:500}

        )

    }

}
