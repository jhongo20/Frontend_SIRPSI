import { Component, ViewChild } from '@angular/core';
import { Empresa, IEmpresa } from '../../Intefaces/IEmpresa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmpresaEditarComponent } from '../empresa-editar/empresa-editar.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaEliminarComponent } from '../empresa-eliminar/empresa-eliminar.component';
import { EmpresaServiceService } from '../empresa.service';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent {
  displayedColumns: string[] = ['id', 'tipoDocumento','documento','digitoVerificacion','idTipoEmpresa','nombre','idMinisterio','ministerio','idEstado','fechaRegistro','fechaModifico','Acciones'];
  dataSource = new MatTableDataSource<Empresa>();
  

  constructor(private empresaServicio: EmpresaServiceService,
    private dialog: MatDialog){}
  

ngOnInit():void{
  this.getResultados();
}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getResultados() {
    this.empresaServicio.getEmpresas().subscribe({
      next: (dataResponse: any) => {
        debugger
        this.dataSource.data = dataResponse;
        console.log(this.dataSource.data)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarEmpresa(empresa: Empresa){
      console.log(empresa);
      this.dialog.open(EmpresaEditarComponent,{
        data:{
          nombre: empresa.nombre,
          documento: empresa.documento,
          ministerio: empresa.idMinisterio,
          estado: empresa.idEstado,
          id: empresa.id,
          fechaRegistro: empresa.fechaRegistro,
          fechaModifico: empresa.fechaModifico
        }
      })  
  }

  
  eliminarEmpresa(empresa: Empresa){
   
    console.log(empresa);
    this.dialog.open(EmpresaEliminarComponent,{
      data:{
        id: empresa.id,
        nombre: empresa.nombre
      }
    })

}



  
}

  