import child_process from 'child_process'
import { fs, log } from '@magic/test'

const execFile = (p, args = [], opts = {}) =>
  new Promise((resolve, reject) => {
    child_process.execFile(p, args.filter(a => a), opts, (err, stdout, stderr) => {
      if (err) {
        reject(err)
        return
      }
      if (stderr) {
        reject(stderr)
        return
      }

      if (stdout) {
        resolve(stdout)
        return
      }
    })
  })

export const execCommand = props => {
  const { args = [], cliPath, cmd, expected, in: input = process.cwd(), out } = props

  return async () => {
    let oldContent = `${Math.random()}`

    if (out && await fs.exists(out)) {
      oldContent = await fs.readFile(out, 'utf8')

      await fs.rmrf(out)
    }

    const stdout = await execFile(cliPath, [
      cmd,
      input ? '-i' : '',
      input ? input : '',
      out ? '-o' : '',
      out ? out : '',
      ...args,
    ])

    if (!out) {
      return stdout
    }

    if (expected && stdout !== expected) {
      return false
    }

    const content = await fs.readFile(out, 'utf8')

    if (content !== oldContent) {
      log.warn('W_TEST_THEME_CONTENT_CHANGED', 'output for', out, 'has changed. please review')
      console.log(content)
      console.log(oldContent)
    }

    return content === oldContent && content
  }
}