import { TestBed } from '@angular/core/testing';
import { EventoService } from './evento.service';
describe('EventoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EventoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=evento.service.spec.js.map