import { Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class CommonCrudService<T extends { id: number }> {
  constructor(protected readonly repo: Repository<T>) {}

  async create(data: DeepPartial<T>): Promise<T> {
    if (!data) {
      throw new Error('Data must be provided');
    }
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async getAll(): Promise<T[]> {
    return this.repo.find();
  }

  async getById(id: number): Promise<T> {
    const foundId = await this.repo.findOneBy({ where: { id } } as any);
    if (!foundId) {
      throw new Error(`Entity with id ${id} not found`);
    }
    return foundId;
  }

  async updateById(id: number, data: Partial<T>): Promise<T> {
    const entity = await this.getById(id);
    Object.assign(entity, data);
    return this.repo.save(entity);
  }

  async deleteById(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (!result.affected) {
      throw new NotFoundException('Entity not found');
    }
  }
}
