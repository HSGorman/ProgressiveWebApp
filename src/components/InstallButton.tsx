import { Button } from '@mui/material'
import { useInstallPrompt } from './useInstallPrompt'

export function InstallButton() {
    const { install, canInstall, isInstalled } = useInstallPrompt()

    if (isInstalled) {
        return (
            <>
                <p>App is installed! 🎉</p>
            </>
        )
    }
    if (!canInstall) {
        return (
            <>
                <p>Can't install!
                    {canInstall ? ' (canInstall is true)' : ' (canInstall is false)'}
                    {isInstalled ? ' (isInstalled is true)' : ' (isInstalled is false)'}
                </p>
            </>
        )
    }

    return (
        <>
            <p>Install our app for a better experience!</p>
            <Button variant="contained" onClick={install}>
                Install App
            </Button>
            <p>After button</p>
        </>
    )
}