import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { DetalleComponent } from "./detalle/detalle.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EstadisticaComponent } from "./estadistica/estadistica.component";
import { IngresoEgresoComponent } from "./ingreso-egreso.component";

//Pipes
import { OrdenIngresosPipe } from "../pipes/orden-ingresos.pipe";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DetalleComponent,
    DashboardComponent,
    EstadisticaComponent,
    IngresoEgresoComponent,
    OrdenIngresosPipe,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    ChartsModule, 
    SharedModule],
})
export class IngresoEgresoModule {}