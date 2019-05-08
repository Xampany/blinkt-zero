import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { IndexGuard } from "./shared/index.guard";
import { LedResolverService } from "./shared/led-resolver.service";
import { UnloadGuard } from "./shared/unload.guard";

const routes: Routes = [
  {
    path: ":index",
    component: DetailComponent,
    canActivate: [IndexGuard],
    canDeactivate: [UnloadGuard],
    resolve: {
      led: LedResolverService
    },
    data: {
      solution: 42
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlinktDetailRoutingModule {}
