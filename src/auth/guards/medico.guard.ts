import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class MedicoGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // O usuário autenticado

    if (!user || !user.medico) {
      throw new ForbiddenException('Acesso negado. Apenas médicos podem acessar esta rota.');
    }

    return true; // Acesso permitido se for médico
  }
}
