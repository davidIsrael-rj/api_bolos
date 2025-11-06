import { PartialType } from "@nestjs/mapped-types";
import { createUserDTO } from "./create-user.dto";

export class UpdatePatchUserDTO extends PartialType(createUserDTO){}