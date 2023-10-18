analytics_settings(True)
disable_snapshots()

PROJECT_ROOT = "."


def get_filelist_from_command(command, working_dir=PROJECT_ROOT, file_separator="\n"):
    out = str(local(command, dir=working_dir))

    # Strip whitespace and file_separator so we don't end up with a '' entry which will
    # end up resolving to working_dir.
    out = out.strip("\r\n \t\0" + file_separator)

    relpath_files = out.split(file_separator)

    # make filenames absolute paths
    return [os.path.join(os.path.abspath(working_dir), f) for f in relpath_files]


def get_filelist(working_dir, search_dir, name_mask):
    """
    Find files relative to working_dir, that are in search_dir, that match name_mask.

    Ex: get_filelist(PROJECT_ROOT, 'pysrc/', '*.py') to find all python files within PROJECT_ROOT/pysrc/
    """
    return get_filelist_from_command(
        'find {} -type f -name "{}" -print0'.format(search_dir, name_mask), working_dir, "\0"
    )


def all_git_files(project_root):
    return get_filelist_from_command("git ls-files -z", project_root, "\0")

docker_build(
    "backend",
    "app",
    dockerfile="app/Dockerfile",
    only=all_git_files(PROJECT_ROOT),
)
k8s_yaml("kubernetes/backend.yaml")

k8s_resource(
    "backend",
    port_forwards=[port_forward(3000, 3000, link_path="api")],
)