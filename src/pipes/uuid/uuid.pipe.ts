import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {validate as isuuid} from "uuid"
@Injectable()
export class UuidPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    console.log("value",value);
    console.log("metadata",metadata);

    if(!isuuid(value)) {

      throw new BadRequestException(`${metadata.data} must be uuid`)
    }
    
    
    return value;
  }
  
}
