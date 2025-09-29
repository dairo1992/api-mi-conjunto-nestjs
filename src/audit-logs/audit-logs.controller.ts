import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Controller('companies/:companyId/audit-logs')
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Post()
  create(@Param('companyId') companyId: string, @Body() createAuditLogDto: CreateAuditLogDto) {
    return this.auditLogsService.create({ ...createAuditLogDto, company_id: +companyId });
  }

  @Get()
  findAll(@Param('companyId') companyId: string) {
    return this.auditLogsService.findAll(+companyId);
  }
}
