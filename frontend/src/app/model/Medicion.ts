//{"medicionId":1,
//"fecha":"2020-11-26T21:19:41.000Z",
//"valor":"60",
//"dispositivoId":1}

export class Medicion{
    private _dispositivoId: number;
    private _medicionId: number; 
    private _fecha: string;
    private _valor: string;

    constructor(dispositivo, medicion, fecha, valor){
        this._dispositivoId=dispositivo;
        this._medicionId=medicion;
        this._fecha=fecha;
        this._valor=valor;
    }

    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    public set dispositivoId(value: number) {
        this._dispositivoId = value;
    }

    public get medicion(): number {
        return this._medicionId;
    }
    public set medicion(value: number) {
        this._medicionId= value;
    }

    public get fecha(): string {
        return this._fecha;
    }
    public set fecha(value: string) {
        this._fecha = value;
    }
    
    public get valor(): string {
        return this._valor;
    }
    public set valor(value: string) {
        this._valor = value;
    }
}