import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class PacienteGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.paciente) {
      throw new ForbiddenException('Acesso negado. Apenas pacientes podem acessar esta rota.');
    }

    return true;
  }
}
