import { Request, Response } from 'express';
import { UserUseCase } from '../../application/userUseCase';

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  getCtrl = async (req: Request, res: Response) => {
    const { uuid = '' } = req.query;
    const user = await this.userUseCase.getDetailUser(uuid);
    res.send({ user });
  };

  insertCtrl = async (req: Request, res: Response) => {
    const user = await this.userUseCase.registerUser(req.body);
    res.send({ user });
  };

  getAllCtrl = async (_req: Request, res: Response) => {
    const users = await this.userUseCase.getAllUser();
    res.send({ users });
  };
}
