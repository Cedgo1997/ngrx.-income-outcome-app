import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { IngresoEgreso } from "src/app/models/ingreso-egreso.model";
import { IngresoEgresoService } from "src/app/services/ingreso-egreso.service";
import Swal from "sweetalert2";
import { AppStateWithIngreso } from "../ingreso-egreso.reducer";

@Component({
  selector: "app-detalle",
  templateUrl: "./detalle.component.html",
  styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresosEgresos: IngresoEgreso[] = [];
  ingresosSubs: Subscription;

  constructor(
    private store: Store<AppStateWithIngreso>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit() {
    this.ingresosSubs = this.store
      .select("ingresoEgreso")
      .subscribe(
        (ingresoEgreso) => (this.ingresosEgresos = ingresoEgreso.items)
      );
  }

  ngOnDestroy() {
    this.ingresosSubs.unsubscribe();
  }

  borrar(uid: string) {
    this.ingresoEgresoService
      .borrarItem(uid)
      .then(() => Swal.fire("¡Eliminado!", "Item Borrado", "success"))
      .catch((err) => Swal.fire("¡Error!", err.message, "error"));
  }
}
