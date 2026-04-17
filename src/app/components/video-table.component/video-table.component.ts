import { Component, computed, inject, input, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Video } from '../../models/video.model';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { WhatDeviceService } from '../../services/what-device.service';

@Component({
  selector: 'app-video-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    NgOptimizedImage,
    MatIcon,
    MatSortModule,
    MatIconButton,
    DatePipe,
    MatCheckbox,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
  ],
  templateUrl: './video-table.component.html',
  styleUrl: './video-table.component.scss',
})
export class VideoTableComponent {
  // selectboxes
  videos= input.required<Video[]>();
  initialSelection: [] = [];
  allowMultiSelect: boolean = true;
  selection = new SelectionModel<Video>(this.allowMultiSelect, this.initialSelection);
  videoDataSource = computed(() => new MatTableDataSource<Video>(this.videos()));
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  whatDeviceService = inject(WhatDeviceService);
  columnsToDisplay: string[] = [
    'thumbnail',
    'title',
    'status',
    'publishDate',
    'additionalButtons',
  ];

  columnsToDisplayOnPhone: string[] = [
    'thumbnail',
    'title',
    'publishDate',
  ];

  ngAfterViewInit() {
    this.videoDataSource().paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.videoDataSource().data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.videoDataSource().data.forEach((row) => this.selection.select(row));
  }
}
