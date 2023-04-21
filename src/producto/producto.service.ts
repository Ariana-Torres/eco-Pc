import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
  ){}

  async create(createProductoDto: CreateProductoDto) {
    const createProducto = await this.productoRepository.create
    (createProductoDto);
    await this.productoRepository.save(createProducto);
    return createProducto;
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: string) {
    return this.productoRepository.findOneBy({id});
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const findproducto =  await this.findOne(id)
    const updateproducto = await this.productoRepository.merge(findproducto, updateProductoDto)
    return  this.productoRepository.save(updateproducto);
  }

  async remove(id: string) {
    const Producto = await this.findOne(id)
    await this.productoRepository.remove(Producto)
    return  "product removed successfully";
  }
}
