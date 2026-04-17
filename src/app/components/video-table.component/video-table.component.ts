import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-video-table',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './video-table.component.html',
  styleUrl: './video-table.component.scss',
})
export class VideoTableComponent {
  protected readonly DataSource = DataSource;
  videoDataSource = new MatTableDataSource<Video>(fakeVideos);

  columnsToDisplay: string[] = [
    'selection',
    'thumbnail',
    'title',
    'status',
    'publishDate',
    'additionalButtons',
  ];
}
