import { task, src, dest, series, parallel } from 'gulp';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import flatten from 'gulp-flatten';
import delPath from './del-path.js';

task('clean', async () => {
  await delPath('../build/es/theme-chalk');
  await delPath('../build/lib/theme-chalk');
})

export default series(
 'clean',
  parallel(
    () => {
      return src('../build/es/**/*.css')
        .pipe(concat('index.css'))
        .pipe(autoprefixer()) // css前缀
        .pipe(cssnano()) // css压缩
        .pipe(dest('../build/es/theme-chalk'));
    },
    () => {
      return src('../build/lib/**/*.css')
        .pipe(concat('index.css'))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(dest('../build/lib/theme-chalk'));
    },
    () => {
      return src('../build/es/**/*.css')
      .pipe(flatten())
      .pipe(autoprefixer())
      .pipe(cssnano())
      .pipe(dest('../build/es/theme-chalk'));
    },
    () => {
      return src('../build/lib/**/*.css')
      .pipe(flatten()) // 扁平化到文件
      .pipe(autoprefixer())
      .pipe(cssnano())
      .pipe(dest('../build/lib/theme-chalk'));
    }
  )
)